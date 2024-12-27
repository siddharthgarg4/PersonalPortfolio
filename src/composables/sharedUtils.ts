// Note: Shared utility functions
export const visitLink = (link: string): void => {
  window.open(link, "_blank");
};

export const visitSection = (sectionId: string): void => {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({ block: "start", behavior: "smooth" });
  } else {
    console.log(
      "The element associated with the sectionId is null / could not be found.",
    );
  }
};
