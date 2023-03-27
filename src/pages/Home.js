import backgroundImage from '../image/background.jpg';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontWeight: 700,
    fontSize: 38,
    textAlign: 'center',
    color: '#c9ada7',
  },

  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '80vh',
    width: '100%',
    marginTop: '10px',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact manager welcome page</h1>
      <div style={styles.background}></div>
    </div>
  );
}
