export const handleOpenLink = (link = "") => {
  if (!link) return;
  window.open(link, "_blank", "noopener", "noreferrer");
};

export const handleOpenMailbox = (email = "") => {
  if (!email) return;
  const mailtoLink = `mailto:${email}`;
  window.open(mailtoLink, "_blank", "noopener", "noreferrer");
};

export const handlePhoneCall = (phoneNumber = "") => {
  if (!phoneNumber) return;
  const isMobileDevice =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (!isMobileDevice) {
    alert(
      `This functionality is only available on mobile devices.\n You can copy: ${phoneNumber}`
    );
  } else {
    window.open(`tel:${phoneNumber}`);
  }
};
