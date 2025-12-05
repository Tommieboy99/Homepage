const main = document.querySelector('.main');
const template = document.querySelector('#project-template')

const projects = [ {
        image: "project-320.webp",
        name: "First Project",
        links: [
            {
                href: "https://github.com",
                src: "./icons/github-icon-project-card.svg",
                alt: "GitHub"
            },
            {
                href: "https://google.com",
                src: "./icons/open-in-new-project-card.svg",
                alt: "Live site"
            }
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }, 
    {
        image: "project-320.webp",
        name: "First Project",
        links: [
            {
                href: "https://github.com",
                src: "./icons/github-icon-project-card.svg",
                alt: "GitHub"
            },
            {
                href: "https://google.com",
                src: "./icons/open-in-new-project-card.svg",
                alt: "Live site"
            }
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
        {
        image: "project-320.webp",
        name: "First Project",
        links: [
            {
                href: "https://github.com",
                src: "./icons/github-icon-project-card.svg",
                alt: "GitHub"
            },
            {
                href: "https://google.com",
                src: "./icons/open-in-new-project-card.svg",
                alt: "Live site"
            }
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }, 
            {
        image: "project-320.webp",
        name: "First Project",
        links: [
            {
                href: "https://github.com",
                src: "./icons/github-icon-project-card.svg",
                alt: "GitHub"
            },
            {
                href: "https://google.com",
                src: "./icons/open-in-new-project-card.svg",
                alt: "Live site"
            }
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }, 
            {
        image: "project-320.webp",
        name: "First Project",
        links: [
            {
                href: "https://github.com",
                src: "./icons/github-icon-project-card.svg",
                alt: "GitHub"
            },
            {
                href: "https://google.com",
                src: "./icons/open-in-new-project-card.svg",
                alt: "Live site"
            }
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }, 
            {
        image: "project-320.webp",
        name: "First Project",
        links: [
            {
                href: "https://github.com",
                src: "./icons/github-icon-project-card.svg",
                alt: "GitHub"
            },
            {
                href: "https://google.com",
                src: "./icons/open-in-new-project-card.svg",
                alt: "Live site"
            }
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }, 
]

projects.forEach(project => {
  const clone = template.content.cloneNode(true);

  const img = clone.querySelector(".project-img");
  img.src = project.image;
  img.alt = `Preview of ${project.name}`;

  clone.querySelector(".project-title").textContent = project.name;

  const nav = clone.querySelector(".project-links");
  project.links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    const icon = document.createElement("img");
    icon.src = link.src;
    icon.alt = link.alt;

    a.appendChild(icon);
    nav.appendChild(a);
  });

  clone.querySelector(".project-description").textContent = project.description;

  main.appendChild(clone);
});