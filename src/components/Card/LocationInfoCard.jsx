import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import formatLabel from "../../utils/labelFormatter";
import "./LocationInfoCard.css";
import blockedtagslist from "./BlockedTags.json";

export default function LocationInfo({ location }) {
  if (!location) return null;

  const { name, display_name, info } = location;
  return (
    <Card className="location-info-card">
      <CardContent className="location-info-content">
        <Typography className="location-info-title" gutterBottom>
          {name}
        </Typography>
        <table className="location-info-table">
          <tbody>
            {display_name && (
              <tr key="display_name">
                <td className="location-info-key-td">
                  {formatLabel("display_name")}
                </td>
                <td className="location-info-value-td">{display_name}</td>
              </tr>
            )}
            {info &&
              Object.entries(info)
                .filter(([key]) => !blockedtagslist.includes(key))
                .map(([key, value]) => (
                  <tr key={key}>
                    <td className="location-info-key-td">{formatLabel(key)}</td>
                    <td className="location-info-value-td">
                      {key === "website" ? (
                        <a
                          href={value}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
