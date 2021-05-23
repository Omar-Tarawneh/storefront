import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Footer() {
  return (
    <AppBar
      style={{ backgroundColor: '#f5f5f4' }}
      position="static"
      color="primary"
    >
      <Container maxWidth="md">
        <Toolbar style={{ color: 'black' }}>
          <Typography variant="body1" color="inherit">
            © 2021 Omar-Tarawneh
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
