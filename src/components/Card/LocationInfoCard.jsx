import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import formatLabel from "../../utils/labelFormatter";
import "./LocationInfoCard.css";

export default function LocationInfo({ location }) {
  if (!location) return null;

  const { name, info } = location;
  return (
    <Card className="location-info-card">
      <CardContent className="location-info-content">
        <Typography className="location-info-title" gutterBottom>
          {name}
        </Typography>
        {info &&
          Object.entries(info).map(([key, value]) => (
            <div className="location-info-row" key={key}>
              <span className="location-info-key">{formatLabel(key)}:</span>
              <span className="location-info-value">{value}</span>
            </div>
          ))}
      </CardContent>
    </Card>
  );
}
