import { toFormikValidationSchema } from 'zod-formik-adapter';
import { CREATE_PHRASE_BLUEPRINT, VALIDATIONS_CONFIG } from '@/lib/constant';
import { useFormik } from 'formik';
import { Input, Button } from '@/components/ui';
import styles from './styles.module.css';
import { Phrase } from '@/types/phrase';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  handleCreateNewPhrase: (data: Phrase) => void;
}

export const PhraseForm = ({ handleCreateNewPhrase }: Props) => {
  const validationSchema = toFormikValidationSchema(CREATE_PHRASE_BLUEPRINT);

  const formik = useFormik({
    initialValues: {
      phrase: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleCreateNewPhrase({
        phrase: values.phrase,
        id: uuidv4(),
      });

      resetForm();
    },
  });

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
    values,
    errors
  } = formik;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <Input
          id="phrase"
          name="phrase"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phrase}
          placeholder="Ingresar frase"
          error={formik.touched && errors.phrase}
          onClear={() => {
            setFieldValue('phrase', '');
          }}
          maxValueCount={VALIDATIONS_CONFIG.phrase.max.value}
          valueCount={values.phrase.length}
        />
      </div>
      <div className={styles.submitButton}>
        <Button type="submit" disabled={Object.keys(errors).length > 0}>Enviar</Button>
      </div>
    </form>
  );
}
