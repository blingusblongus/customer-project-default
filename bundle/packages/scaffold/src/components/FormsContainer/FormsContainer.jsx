import React from 'react';
import { useSelector } from '../../redux/hooks/hooks';

const FormsContainer = () => {
  const forms = useSelector(store => store.forms);
  console.log('formcontainer forms:', forms);
  return (
    <>
      {forms.length > 0 && (
        <>
          <h1>Forms</h1>
          <div>
            {forms?.map((form, i) => {
              return (
                <p style={styles.p} key={i}>
                  {form.name}: {form.description}
                </p>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

const styles = {
  p: {
    fontSize: 14,
    textAlign: 'center',
  },
};

export default FormsContainer;
