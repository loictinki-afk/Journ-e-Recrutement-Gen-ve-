function openCalendly(sessionId) {
  const urls = {
    session1: "https://calendly.com/startsuisse-info/evenement-recrutement-10h30",
    session2: "https://calendly.com/startsuisse-info/evenement-recrutement-geneve-10h30-clone",
    session3: "https://calendly.com/startsuisse-info/evenement-recrutement-geneve-18-dec-14h00-20-clone"
  };

  const url = urls[sessionId];
  if (!url) return;
  window.open(url, "_blank");
}
