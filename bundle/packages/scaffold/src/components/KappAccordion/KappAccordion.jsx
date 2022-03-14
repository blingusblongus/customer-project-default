import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function KappAccordion({ kapps }) {
  console.log(kapps);
  return (
    <div>
      {kapps?.map((kapp, i) => {
        return (
          <Accordion key={i}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{kapp.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {kapp.attributes.length > 0 ? (
                  <ol>
                    {kapp.attributes?.map((attr, i) => {
                      return (
                        <li key={i}>
                          {attr.name}: {attr.values[0]}
                        </li>
                      );
                    })}
                  </ol>
                ) : (
                  <div>No Attributes</div>
                )}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
