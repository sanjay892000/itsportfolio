const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
/* const GitHubStrategy = require("passport-github2").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy; */

require("dotenv").config();

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://itsportfolio.onrender.com/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      const user = {
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
        avatar: profile.photos[0].value,
        accessToken, // Include this if you want to send it to frontend
        refreshToken,
      };
      return done(null, user);
    }
  )
);

// GitHub OAuth
/* passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

// LinkedIn OAuth
passport.use(
  new LinkedInStrategy(
    {
      clientID: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      callbackURL: "/auth/linkedin/callback",
      scope: ["r_emailaddress", "r_liteprofile"],
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

// Twitter OAuth
passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CLIENT_ID,
      consumerSecret: process.env.TWITTER_CLIENT_SECRET,
      callbackURL: "/auth/twitter/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
); */

module.exports = passport;
