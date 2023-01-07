export default function scrollToSection(e) {
  const { id } = e.target;
  if (document) {
    let hookForAboutSection = document.getElementById("about");
    let hookForContactsSection = document.getElementById("contacts");

    if (!hookForAboutSection || !hookForContactsSection) return;

    switch (id) {
      case "aboutButton":
        hookForAboutSection.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });

        break;

      case "contactsButton":
        hookForContactsSection.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });

        break;
      default:
        break;
    }
  }
}
