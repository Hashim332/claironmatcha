export default function InfoSection() {
  return (
    <div className=''>
      <h2 className='text-2xl font-semibold my-4'>How it works</h2>
      <div className='flex flex-col gap-2'>
        <p>
          You connect your spotify account and we update your track count with
          how much Clairo you listened to. You take pictures of your drink and
          if we can verify it's legit, we log your drink.
        </p>
        <p>Each song is worth 1 point, each drink is worth 10 points!</p>
        <p>
          Check the leaderboard for the top scorers! Do you have what it takes?
        </p>
      </div>
    </div>
  );
}
