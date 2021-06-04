async function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default async function apiClock(_req, res) {
  await sleep(500); // simulate slow endpoint
  res.status(200).json({ date: new Date() });
}
