const Profile = ({ postedBy }) => {
  if (!postedBy) return <div></div>

  return (
    <div style={{ padding: '0.5rem', paddingTop: '0.8rem' }}>
      {postedBy.username}
    </div>
  );
};

export default Profile;
