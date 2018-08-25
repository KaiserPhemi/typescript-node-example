// component
import app from './App';

// port
const port = 5555;

// starts server
app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`Server listening on ${port}`);
});
