declare const import.meta: any;

const _cache: Record<string, any> = {};

import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: import.meta.env.GITHUB_TOKEN
});

const username = import.meta.env.GITHUB_USERNAME || 'Brandon255-rgb';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  private: boolean;
}

export async function getRecentRepos(limit: number = 12): Promise<GitHubRepo[]> {
  try {
    const { data } = await octokit.rest.repos.listForUser({
      username,
      sort: 'updated',
      per_page: limit,
      type: 'all' // Gets both public and private repos if token has access
    });

    return data.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      homepage: repo.homepage,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      updated_at: repo.updated_at,
      topics: repo.topics || [],
      private: repo.private
    }));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

export async function getPinnedRepos(): Promise<GitHubRepo[]> {
  // Fallback: get most starred repos
  try {
    const { data } = await octokit.rest.repos.listForUser({
      username,
      sort: 'stars',
      per_page: 6,
      type: 'all'
    });

    return data.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      homepage: repo.homepage,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      updated_at: repo.updated_at,
      topics: repo.topics || [],
      private: repo.private
    }));
  } catch (error) {
    console.error('Error fetching pinned repos:', error);
    return [];
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'today';
  if (diffDays === 1) return 'yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}