import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Realply3 from "./components/Realply3";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|realply-3)">
          <Realply3 {...realply3Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const a2Data = {
    className: "a-2",
};

const div1Data = {
    place: "Lauria",
};

const div2Data = {
    place: "Licia",
    className: "div-40",
};

const a3Data = {
    className: "a-3",
};

const realply3Data = {
    navbarLinkUseCases: "Use Cases",
    navbarLinkPricing: "Pricing",
    navbarLinkBlog: "Blog",
    navbarLinkCareers: "Careers",
    navbarLinkDocs: "Docs",
    group1: "https://anima-uploads.s3.amazonaws.com/projects/63bf8827ff3def67cab8da90/releases/63ca36e9fc1873ac1b44482e/img/group-1@2x.png",
    group10236: "https://anima-uploads.s3.amazonaws.com/projects/63bf8827ff3def67cab8da90/releases/63ca36e9fc1873ac1b44482e/img/group-10236@2x.png",
    navbarLinkAbout: "About",
    navbarLinkHowItWorks: "How it works",
    navbarLinkTestimonials: "Testimonials",
    navbarLinkPress: "Press",
    en: "EN",
    image: "https://anima-uploads.s3.amazonaws.com/projects/63bf8827ff3def67cab8da90/releases/63ca36e9fc1873ac1b44482e/img/image.png",
    installExtensionForChrome: "Install Extension for Chrome",
    chrome: "Chrome",
    firefox: "Firefox",
    place1: "Brave",
    edge: "Edge",
    place2: "Opera",
    x10XYourLinkedinOnAutoPilot: <React.Fragment>10x Your LinkedIn on<br />Auto-Pilot</React.Fragment>,
    weWriteCraftAnd: "We write, craft and send thousands of data driven, messages to your target audience so you can drive more revenue.",
    featuredIn: "Featured In",
    group10230: "https://anima-uploads.s3.amazonaws.com/projects/63bf8827ff3def67cab8da90/releases/63ca36e9fc1873ac1b44482e/img/group-10230.png",
    instantLeadNotifications: "Instant Lead Notifications",
    loremIpsumDolorSi1: "Lorem ipsum dolor sit amet consectetur. Risus sit vel sit in quisque neque. Elit amet ut pellentesque purus morbi fringilla.",
    autoPilotMarketing: "Auto-Pilot Marketing",
    loremIpsumDolorSi2: "Lorem ipsum dolor sit amet consectetur. Risus sit vel sit in quisque neque. Elit amet ut pellentesque purus morbi fringilla.",
    roiTrackingSystem: "ROI Tracking System",
    loremIpsumDolorSi3: "Lorem ipsum dolor sit amet consectetur. Risus sit vel sit in quisque neque. Elit amet ut pellentesque purus morbi fringilla.",
    targetQualifiedProspects: "Target Qualified Prospects",
    div1: "https://anima-uploads.s3.amazonaws.com/projects/63bf8827ff3def67cab8da90/releases/63ca36e9fc1873ac1b44482e/img/image-1@2x.png",
    loremIpsumDolorSi4: "Lorem ipsum dolor sit amet consectetur. Risus sit vel sit in quisque neque. Elit amet ut pellentesque purus morbi fringilla. Urna morbi dui euismod curabitur ullamcorper aenean tempus nibh.",
    x5XYourLeadFlow: "5x Your Lead Flow",
    div2: "https://anima-uploads.s3.amazonaws.com/projects/63bf8827ff3def67cab8da90/releases/63ca36e9fc1873ac1b44482e/img/image-1@2x.png",
    loremIpsumDolorSi5: "Lorem ipsum dolor sit amet consectetur. Risus sit vel sit in quisque neque. Elit amet ut pellentesque purus morbi fringilla. Urna morbi dui euismod curabitur ullamcorper aenean tempus nibh.",
    convertMoreDeals: "Convert More Deals",
    div3: "https://anima-uploads.s3.amazonaws.com/projects/63bf8827ff3def67cab8da90/releases/63ca36e9fc1873ac1b44482e/img/image-1@2x.png",
    loremIpsumDolorSi6: "Lorem ipsum dolor sit amet consectetur. Risus sit vel sit in quisque neque. Elit amet ut pellentesque purus morbi fringilla. Urna morbi dui euismod curabitur ullamcorper aenean tempus nibh.",
    trustedNationwide: "Trusted Nationwide",
    exit1: "https://anima-uploads.s3.amazonaws.com/projects/63bf8827ff3def67cab8da90/releases/63ca36e9fc1873ac1b44482e/img/exit-1@2x.png",
    coldwellBankerLogo1: "https://anima-uploads.s3.amazonaws.com/projects/63bf8827ff3def67cab8da90/releases/63ca36e9fc1873ac1b44482e/img/coldwell-banker-logo-1@2x.png",
    expRealtyColor1: "https://anima-uploads.s3.amazonaws.com/projects/63bf8827ff3def67cab8da90/releases/63ca36e9fc1873ac1b44482e/img/exp-realty-color-1@2x.png",
    group10226: "https://anima-uploads.s3.amazonaws.com/projects/63bf8827ff3def67cab8da90/releases/63ca36e9fc1873ac1b44482e/img/group-10226@2x.png",
    lovedByTheWorldSBest: "Loved by the world's best",
    reallyGoodSoftware: "Really good software that works amazingly well. The videos are helpful. I think it takes a little getting used to but works really well and I'm growing my connections on LinkedIn in a very targeted way day by day. Thanks for this!",
    div4: "https://anima-uploads.s3.amazonaws.com/projects/63bf8827ff3def67cab8da90/releases/63ca36e9fc1873ac1b44482e/img/mask-group-1-png@2x.png",
    name: "Ana",
    designTeamLeadAtXyz: "Design Team Lead at xyz",
    anEssentialToolFo: "An essential tool for anyone with a LinkedIn Premium account who is serious about building their business. I would thoroughly recommend it. The cost is minimal to the level of business it can generate or provide.",
    div5: "https://anima-uploads.s3.amazonaws.com/projects/63bf8827ff3def67cab8da90/releases/63ca36e9fc1873ac1b44482e/img/jane-docusign-testimonials-2x-png@2x.png",
    fantasticToolForL: "Fantastic tool for LinkedIn! Makes messaging and new connections so much faster and easier, plus it's simple to use. Still getting my head around setting up the funnels but the videos are very helpful. Highly recommend.",
    div6: "https://anima-uploads.s3.amazonaws.com/projects/63bf8827ff3def67cab8da90/releases/63ca36e9fc1873ac1b44482e/img/mask-group-png@2x.png",
    getStartedWithRealplyToday: "Get started with Realply today",
    toScheduleAProduc: <React.Fragment>To schedule a product Demo with our product consultants. <br />Click the button.</React.Fragment>,
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/63bf8827ff3def67cab8da90/releases/63ca36e9fc1873ac1b44482e/img/image-4.png",
    aaaaa1: "https://anima-uploads.s3.amazonaws.com/projects/63bf8827ff3def67cab8da90/releases/63bf882e3a055ba5b22bdd97/img/aaaaa-1@2x.png",
    group2: "https://anima-uploads.s3.amazonaws.com/projects/63bf8827ff3def67cab8da90/releases/63ca36e9fc1873ac1b44482e/img/group@2x.png",
    address: "7014 E Camelback Rd. Suite B100A, Scottsdale AZ 85251",
    place3: "Legal",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    cookiesPolicy: "Cookies Policy",
    copyright2020Realp: "Copyright 2020 Realply. All rights reserved. Various trademarks held by their respective owners.",
    a1Props: a2Data,
    div1Props: div1Data,
    div2Props: div2Data,
    a2Props: a3Data,
};

