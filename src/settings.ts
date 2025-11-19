export const profile = {
  fullName: "Dia Raboana",
  title: "",
  institute: "",
  author_name: "", // Author name to be highlighted in the papers section
  research_areas: [
    // { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
  ],
};

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
  email: "rdiadama@gmail.com",
  linkedin: "https://www.linkedin.com/in/dia-i-am-coder-in-prod",
  x: "",
  github: "https://github.com/CO-dia",
  gitlab: "",
  scholar: "",
  inspire: "",
  arxiv: "",
  orcid: "",
};

export const template = {
  website_url: "https://co-dia.github.io", // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
  menu_left: false,
  transitions: true,
  lightTheme: "winter", // winter | nord | fantasy
  darkTheme: "night", //  night | dracula | synthwave
  excerptLength: 200,
  postPerPage: 5,
  base: "/portfolio/", // Repository name starting with / | '/portfolio/' for github pages deployment
};

export const seo = {
  default_title: "Astro Academia",
  default_description: "Astro Academia is a template for academic websites.",
  default_image: "/images/astro-academia.png",
};
