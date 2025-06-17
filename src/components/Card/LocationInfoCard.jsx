import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./LocationInfoCard.css";

export default function LocationInfo({ location }) {
  if (!location) return null;

  const { name, info, address } = location;
  return (
    <Card className="location-info-card">
      <CardContent>
        <Typography gutterBottom>{name}</Typography>

        {info &&
          Object.entries(info).map(([key, value]) => (
            <Typography key={key}>
              {key}: {value}
            </Typography>
          ))}

        {address &&
          Object.entries(address).map(([key, value]) => (
            <Typography key={key}>
              {key}: {value}
            </Typography>
          ))}
      </CardContent>
    </Card>
  );
}
