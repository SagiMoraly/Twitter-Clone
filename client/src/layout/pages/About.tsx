import { useUserLoged } from "../collections/users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import { Typography } from "@mui/material";

export const About = () => {
  const { user } = useUserLoged();

  if (!user) return <Navigate replace to={"/"} />;

  return (
    <div>
      <div style={{ borderBottom: "2px solid #e7ecf0" }}>
        <h1 style={{ marginLeft: "8px" }}>About</h1>
      </div>
      <h2 style={{ textAlign: "center", margin: 6 }}>
        About Sagi Moraly's Twitter Clone
      </h2>
      <div style={{ borderTop: "5px solid #e7ecf0" }}>
        <Typography sx={{ margin: 1, marginBottom: 4 }}>
          Welcome to Sagi Moraly's Twitter Clone! Here, you'll experience a
          nostalgic throwback to the good old days of Twitter while embracing
          modern features and functionalities.
        </Typography>
      </div>
      <div style={{ borderTop: "5px solid #e7ecf0" }}>
        <Typography sx={{ margin: 1, marginBottom: 4 }}>
          Hey there! I'm Sagi Moraly, the mastermind behind this Twitter Clone.
          As a passionate developer and social media enthusiast, I set out to
          recreate the magic of the classic Twitter platform with a twist of
          innovation. My goal was to capture the essence of the original while
          adding my unique touch to create a fun and engaging experience for
          users like you.
        </Typography>
      </div>
      <div style={{ borderTop: "5px solid #e7ecf0" }}>
        <Typography sx={{ margin: 1, marginBottom: 4 }}>
          Remember the days when Twitter was a simple place to share your
          thoughts in 140 characters? Well, we do too! The Twitter Clone pays
          homage to the beloved platform that revolutionized how we communicate
          online. From the iconic blue bird to the familiar timeline layout,
          we've carefully crafted this clone to evoke the same feelings of joy
          and connection that Twitter brought to the world.
        </Typography>
      </div>
      <div style={{ borderTop: "5px solid #e7ecf0" }}>
        <Typography sx={{ margin: 1, marginBottom: 4 }}>
          Now, let's address the elephant in the virtual room. We all remember
          that infamous moment when the Twitter bird flew a little too close to
          Elon Musk and ended up getting an unintended makeover. Yes, Elon
          "Mask"ed Twitter and, well, things got a bit chaotic. The bird went
          incognito, the hashtags went astray, and, for a while, we weren't sure
          if we were tweeting or launching rockets. But fear not! We're proud to
          say that our Twitter Clone escaped the Elon Mask debacle and is free
          from any identity crisis. We promise no rocket launches or hidden
          secret identities here. It's just good old-fashioned tweeting, the way
          it was meant to be. So, come join the fun on Sagi Moraly's Twitter
          Clone, where we celebrate the classic Twitter experience, minus the
          quirks of a certain rocket-obsessed billionaire. Let's tweet away,
          shall we? #NotRocketScience #SagiMoralyClone #TweetInPeace
        </Typography>
      </div>
    </div>
  );
};
