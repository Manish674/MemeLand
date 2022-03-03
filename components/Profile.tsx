import React from 'react';
import styles from '../styles/profileComponent.module.css';
import Link from 'next/link';

const Profile = ({ postedBy }: any) => {
  if (!postedBy) return <div></div>;

  return (
    <Link href={`/user/${postedBy._id}`}>
      <div className={styles.profileContainer}>
        <img
          className={styles.pfp}
          src={postedBy.pfp}
          alt={`${postedBy.username}'s img`}
        />
        <p className={styles.username}>{postedBy.username}</p>
      </div>
    </Link>
  );
};

export default Profile;
