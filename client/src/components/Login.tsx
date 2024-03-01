import UserAvatar from "./UserAvatar";

const Login = () => {
  return (
    <>
      <img
        sizes="(min-width: 768px) 100vw, (max-width: 910px) min(100%, 870px), (max-height: 755px) min(100%, 870px), (min-aspect-ratio: 4500/3000) calc((calc(100vh - 175px)) * 1.5), calc(100vw - 40px)"
        srcSet="https://plus.unsplash.com/premium_photo-1681487916420-8f50a06eb60e?q=80&amp;w=370"
        style={{
          position: "absolute",
          zIndex: -1,
          bottom: 0,
          transform: "translate(150%, 100%)",
          borderRadius: "2rem",
        }}
      />
      <h1>welcome to ROPER</h1>
      <h1>Connect your wallet to login</h1>
      <UserAvatar />
    </>
  );
};

export default Login;
