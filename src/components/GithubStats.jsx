import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Star,
  GitFork,
  Users,
  Calendar,
  AlertCircle,
} from "lucide-react";
import StatCard from "./StatCard";

const GithubStats = ({ username }) => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingMock, setUsingMock] = useState(false);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setLoading(true);
        // 1. Fetch Profile
        const profileRes = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!profileRes.ok) throw new Error("Fetch profile failed");
        const profileData = await profileRes.json();

        // 2. Fetch Repos
        const reposRes = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        );
        if (!reposRes.ok) throw new Error("Fetch repos failed");
        const reposData = await reposRes.json();

        setProfile(profileData);
        setRepos(reposData);
        setUsingMock(false);
      } catch (err) {
        console.warn("GitHub API unreachable, using mock data:", err);
        // Fallback Mock Data
        setProfile({
          public_repos: "15+",
          followers: "10+",
          following: "5",
          login: username,
          html_url: `https://github.com/${username}`,
          created_at: "2022-01-01T00:00:00Z",
        });
        setRepos([
          { stargazers_count: 5, forks_count: 2 },
          { stargazers_count: 3, forks_count: 1 },
          { stargazers_count: 2, forks_count: 0 },
        ]);
        setUsingMock(true);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchGithubData();
    }
  }, [username]);

  if (loading || !profile) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 animate-pulse">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="h-32 bg-slate-800 rounded-xl border border-slate-700"
          ></div>
        ))}
      </div>
    );
  }

  const totalStars = repos.reduce(
    (acc, repo) => acc + (repo.stargazers_count || 0),
    0
  );
  const totalForks = repos.reduce(
    (acc, repo) => acc + (repo.forks_count || 0),
    0
  );
  const joinYear =
    profile && profile.created_at
      ? new Date(profile.created_at).getFullYear()
      : "-";

  return (
    <div className="relative">
      {usingMock && (
        <div className="absolute -top-10 right-0 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-3 py-1 rounded-full text-xs font-medium flex items-center">
          <AlertCircle size={12} className="mr-1" /> Mode Demo (API Terhad)
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <StatCard
          icon={<BookOpen size={24} />}
          value={profile.public_repos || 0}
          label="Total Projek"
          color="text-blue-400"
        />
        <StatCard
          icon={<Star size={24} fill="currentColor" />}
          value={totalStars}
          label="Total Bintang"
          color="text-yellow-400"
        />
        <StatCard
          icon={<GitFork size={24} />}
          value={totalForks}
          label="Total Fork"
          color="text-purple-400"
        />
        <StatCard
          icon={<Users size={24} />}
          value={profile.followers || 0}
          label="Followers"
          color="text-green-400"
        />
        <StatCard
          icon={<Calendar size={24} />}
          value={joinYear}
          label="Bergabung Sejak"
          color="text-orange-400"
        />
      </div>
    </div>
  );
};

export default GithubStats;
