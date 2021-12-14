import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


export const TextStyle = makeStyles((theme: Theme) => createStyles({
    text: {
      color: '#DC143C',
      fontWeight: 'bold',
      fontSize: "20px",
      margin: "100px"
    }
}));

export const ImageStyle = makeStyles((theme: Theme) => createStyles({
    imageSize: {
      width: '400px', 
      height: '350px',
      margin: "100px"
    }
}));