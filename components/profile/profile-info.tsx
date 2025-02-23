interface ProfileInfoProps {
  username: string;
  currentMode: string;
}

export function ProfileInfo({ username, currentMode }: ProfileInfoProps) {
  return (
    <div className="text-center space-y-1">
      <h1 className="text-xl font-bold">{username}</h1>
      <p className="text-sm text-muted-foreground">{currentMode}</p>
    </div>
  );
}
