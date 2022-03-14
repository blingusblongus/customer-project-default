import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { useDispatch } from '../../redux/hooks/hooks';

export default function KappAccordion({ kapps }) {
  const dispatch = useDispatch();
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
              {kapp.attributes.length > 0 ? (
                <ul>
                  {kapp.attributes?.map((attr, i) => {
                    return (
                      <Typography key={i}>
                        <li style={styles.formList}>
                          {attr.name}: {attr.values[0]}
                        </li>
                      </Typography>
                    );
                  })}
                </ul>
              ) : (
                <Typography>No Attributes</Typography>
              )}

              <Button
                onClick={() =>
                  dispatch({
                    type: 'FETCH_FORMS',
                    payload: kapp.slug,
                  })
                }
              >
                Get Forms
              </Button>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

const styles = {
  formList: {
    textAlign: 'left',
  },
};
