"use client";

const updateTime: string = "9 October 2023";

type Link = "linkedin" | "github";

export default function Header() {
  function handleSocialLink(link: Link) {
    if (link === "linkedin")
      window.open(
        "https://www.linkedin.com/in/bryan-liaw-a92012227/",
        "_blank"
      );

    return window.open("https://github.com/Shoko118", "_blank");
  }

  return (
    <div className="md:flex items-center justify-between mt-5 mb-10">
      {/* image */}
      <div className="flex items-center space-x-1 md:space-x-3">
        <div
          className="cursor-pointer"
          onClick={() => handleSocialLink("linkedin")}
        >
          Linkedin
        </div>
        <div
          className="cursor-pointer"
          onClick={() => handleSocialLink("github")}
        >
          Github
        </div>
      </div>

      <div>
        Last update: <span>{updateTime}</span>
      </div>
    </div>
  );
}
