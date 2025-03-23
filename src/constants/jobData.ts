import TeamsLogo from "../assets/images/teams-opt.svg"

// Job Type
export interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    applicants: number;
    logo: string;
    timeAgo: string;
    promoted?: boolean;
  }
  
  // Mock Job Data (At Least 5 Jobs)
  export const jobList: Job[] = [
    {
      id: 1,
      title: "UI/UX Designer",
      company: "Microsoft Teams",
      location: "Seattle, USA (Remote)",
      applicants: 22,
      logo: TeamsLogo,
      timeAgo: "1 day ago",
      promoted: true,
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Google",
      location: "New York, USA (Hybrid)",
      applicants: 15,
      logo: TeamsLogo,
      timeAgo: "3 days ago",
      promoted: true,
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "Amazon",
      location: "Austin, USA (Remote)",
      applicants: 30,
      logo: TeamsLogo,
      timeAgo: "5 hours ago",
      promoted: true,
    },
    {
      id: 4,
      title: "Product Manager",
      company: "Meta",
      location: "San Francisco, USA (Onsite)",
      applicants: 10,
      logo: TeamsLogo,
      timeAgo: "2 weeks ago",
      promoted: true,
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "Netflix",
      location: "Los Angeles, USA (Remote)",
      applicants: 18,
      logo: TeamsLogo,
      timeAgo: "7 days ago",
      promoted: true,
    },
    {
        id: 6,
        title: "UI/UX Designer",
        company: "Microsoft Teams",
        location: "Seattle, USA (Remote)",
        applicants: 22,
        logo: TeamsLogo,
        timeAgo: "1 day ago",
        promoted: false,
      },
      {
        id: 7,
        title: "Frontend Developer",
        company: "Google",
        location: "New York, USA (Hybrid)",
        applicants: 15,
        logo: TeamsLogo,
        timeAgo: "3 days ago",
        promoted: false,
      },
      {
        id: 8,
        title: "Backend Engineer",
        company: "Amazon",
        location: "Austin, USA (Remote)",
        applicants: 30,
        logo: TeamsLogo,
        timeAgo: "5 hours ago",
        promoted: false,
      },
      {
        id: 9,
        title: "Product Manager",
        company: "Meta",
        location: "San Francisco, USA (Onsite)",
        applicants: 10,
        logo: TeamsLogo,
        timeAgo: "2 weeks ago",
        promoted: false,
      },
      {
        id: 10,
        title: "Data Scientist",
        company: "Netflix",
        location: "Los Angeles, USA (Remote)",
        applicants: 18,
        logo: TeamsLogo,
        timeAgo: "7 days ago",
        promoted: false,
      },
  ];
  