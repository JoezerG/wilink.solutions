interface Authors {
  [key: string]: {
    display: string;
    user: string;
    email: string;
    tag: string;
    twitter: string;
    instagram: string;
  };
}

export const authors: Authors = {
  joezerg: {
    display: "Joezer Gullo",
    user: "JoezerG",
    email: "joezergullo@gmail.com",
    tag: "Full Stack Developer",
    twitter: "@joezerg_",
    instagram: "@joezerg",
  },
};

interface DefaultMetaTags {
  description: string;
  title: string;
  author: string;
}

export const defaultMT: DefaultMetaTags = {
  description:
    "Wilink Solutions, un blog dedicado a documentar los procesos de apredizajes sobre desarrollo de software≈",
  title: "Wilink Solutions",
  author: "joezerg",
};
