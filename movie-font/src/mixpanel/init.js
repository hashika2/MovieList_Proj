import mixpanel from "mixpanel-browser";

mixpanel.init("7e6558e3d7bc227eb6954122decfd0e5", {
  debug: true,
  // track_pageview: true,
  // ignore_dnt: true,
});

export const viewPageEvent = (name, event) => {
  mixpanel.track(name, event);
};
