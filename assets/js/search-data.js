// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-curriculum-vitae",
          title: "Curriculum Vitae",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "* indicates equal contribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-academic-service",
          title: "Academic Service",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "news-moved-to-a-new-website",
          title: 'Moved to a new website!',
          description: "",
          section: "News",},{id: "news-officially-joined-ubc-and-started-my-ph-d",
          title: 'Officially joined UBC and started my Ph.D.!',
          description: "",
          section: "News",},{id: "news-my-first-first-author-paper-scale-srs-has-been-accepted-at-hpca-23",
          title: 'My first first author paper, Scale-SRS, has been accepted at HPCA’23!',
          description: "",
          section: "News",},{id: "news-received-faculty-of-applied-science-graduate-award-gsi",
          title: 'Received Faculty of Applied Science Graduate Award (GSI)!',
          description: "",
          section: "News",},{id: "news-received-a-hpca-2023-student-travel-grant-thank-you-hpca",
          title: 'Received a HPCA 2023 Student Travel Grant - Thank you HPCA!',
          description: "",
          section: "News",},{id: "news-scalable-and-secure-row-swap-won-the-best-paper-award-at-hpca-23",
          title: 'Scalable and Secure Row-Swap won the Best Paper Award at HPCA’23!',
          description: "",
          section: "News",},{id: "news-will-be-interning-at-micron",
          title: 'Will be interning at Micron!',
          description: "",
          section: "News",},{id: "news-received-faculty-of-applied-science-graduate-award-gsi",
          title: 'Received Faculty of Applied Science Graduate Award (GSI)!',
          description: "",
          section: "News",},{id: "news-will-be-interning-at-nvidia-research-at-the-architecture-research-group-arg",
          title: 'Will be interning at NVIDIA Research at the Architecture Research Group (ARG)!',
          description: "",
          section: "News",},{id: "news-will-be-serving-as-a-sutdent-volunteer-at-iiswc-2024",
          title: 'Will be serving as a sutdent volunteer at IISWC 2024!',
          description: "",
          section: "News",},{id: "news-received-faculty-of-applied-science-graduate-award-gsi",
          title: 'Received Faculty of Applied Science Graduate Award (GSI)!',
          description: "",
          section: "News",},{id: "news-our-paper-dapper-has-been-accepted-at-hpca-25",
          title: 'Our paper, DAPPER, has been accepted at HPCA’25!',
          description: "",
          section: "News",},{id: "news-our-paper-qprac-has-been-accepted-at-hpca-25",
          title: 'Our paper, QPRAC, has been accepted at HPCA’25!',
          description: "",
          section: "News",},{id: "news-received-hpca-2025-student-travel-grant-thank-you-hpca",
          title: 'Received HPCA 2025 Student Travel Grant - Thank you HPCA!',
          description: "",
          section: "News",},{id: "news-qprac-won-the-distinguished-artifact-award-at-hpca-25",
          title: 'QPRAC won the Distinguished Artifact Award at HPCA’25!',
          description: "",
          section: "News",},{id: "news-our-paper-when-mitigations-backfire-timing-channel-attacks-and-defense-for-prac-based-rowhammer-mitigations-has-been-accepted-at-isca-25",
          title: 'Our paper, When Mitigations Backfire: Timing Channel Attacks and Defense for PRAC-Based RowHammer...',
          description: "",
          section: "News",},{id: "news-received-isca-2025-student-travel-grant-thank-you-isca",
          title: 'Received ISCA 2025 Student Travel Grant - Thank you ISCA!',
          description: "",
          section: "News",},{id: "news-will-be-serving-as-a-sutdent-volunteer-at-spice-workshop-at-micro-25",
          title: 'Will be serving as a sutdent volunteer at SPICE Workshop at MICRO’25.',
          description: "",
          section: "News",},{id: "news-will-serve-on-the-light-program-committee-pc-for-hpca-26",
          title: 'Will serve on the Light Program Committee (PC) for HPCA’26.',
          description: "",
          section: "News",},{id: "news-will-serve-on-the-artifaction-evaluation-committee-for-iiswc-25",
          title: 'Will serve on the Artifaction Evaluation Committee for IISWC’25.',
          description: "",
          section: "News",},{id: "news-received-faculty-of-applied-science-graduate-award-gsi",
          title: 'Received Faculty of Applied Science Graduate Award (GSI)!',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%68%77%6F%6F%33%36@%65%63%65.%75%62%63.%63%61", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/309/4290.html", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jeonghyunwoo0306", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jeonghyun-woo-809196160", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-5819-0693", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=pqtuxw4AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
