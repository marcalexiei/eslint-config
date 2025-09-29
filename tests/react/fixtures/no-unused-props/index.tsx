import type * as React from 'react';

interface UserProfileProps {
  username: string;
  avatarUrl: string;
}
export function UserProfile({ username }: UserProfileProps): React.JSX.Element {
  return <div>{username}</div>;
}
