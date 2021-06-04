import useSWR from "swr";
import styles from "./clock.module.css";

async function fetchJson(url) {
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return await resp.json();
}

export default function Clock() {
  const resp = useSWR("/api/clock", fetchJson);
  if (resp.error) {
    return (
      <main className={styles.main} data-mode="error">
        {resp.error.name}
      </main>
    );
  }
  if (!resp.data) {
    return (
      <main className={styles.main} data-mode="loading">
        Loading
      </main>
    );
  }
  return (
    <main className={styles.main} data-mode="ok">
      <span className={styles.clock}>
        {new Date(resp.data.date).toLocaleTimeString()}
      </span>
    </main>
  );
}
