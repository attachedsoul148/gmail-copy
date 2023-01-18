import { IconButton } from '@mui/material'
import { Formik, Form, Field, FieldProps, ErrorMessage } from 'formik'
import React from 'react'
import styles from './SendModal.module.css'
import CloseIcon from '@mui/icons-material/Close'
import FormatColorTextIcon from '@mui/icons-material/FormatColorText'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined'
import TagFacesOutlinedIcon from '@mui/icons-material/TagFacesOutlined'
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import * as yup from 'yup'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../../firebase'

let valSchema = yup.object().shape({
  to: yup.string().email().required(),
  theme: yup.string().required(),
  message: yup.string().required(),
})

interface SendModalProps {
  onClose: () => void
}
const SendModal: React.FC<SendModalProps> = ({ onClose }) => {
  const initialValues = {
    to: '',
    theme: '',
    message: '',
  }
  const onSubmit = async (values: typeof initialValues) => {
    onClose()
    await addDoc(collection(db, 'emails'), {
      to: values.to,
      theme: values.theme,
      message: values.message,
      timestamp: Timestamp.now(),
    })
  }
  return (
    <Formik validationSchema={valSchema} onSubmit={onSubmit} initialValues={initialValues}>
      {() => (
        <Form className={styles.modal}>
          <div className={styles.modal__header}>
            <h5>New letter</h5>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className={styles.modal__inputs}>
            <Field name="to">
              {({ field }: FieldProps) => (
                <div className={styles.modal__input}>
                  <input {...field} type="text" placeholder="To" />
                </div>
              )}
            </Field>
            <ErrorMessage name="to">
              {(msg) => <div className={styles.error}>{msg}</div>}
            </ErrorMessage>
            <Field name="theme">
              {({ field }: FieldProps) => (
                <div className={styles.modal__input}>
                  <input {...field} type="text" placeholder="Theme" />
                </div>
              )}
            </Field>
            <ErrorMessage name="theme">
              {(msg) => <div className={styles.error}>{msg}</div>}
            </ErrorMessage>
            <Field name="message">
              {({ field }: FieldProps) => (
                <div className={`${styles.modal__input} ${styles.modal__input__message}`}>
                  <textarea {...field} />
                </div>
              )}
            </Field>
            <ErrorMessage name="message">
              {(msg) => <div className={styles.error}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div className={styles.modal__footer}>
            <div className={styles.modal__footer__left}>
              <button type="submit" className={styles.modal__footer__button}>
                Send letter
              </button>
              <IconButton>
                <FormatColorTextIcon />
              </IconButton>
              <IconButton>
                <AttachFileIcon />
              </IconButton>
              <IconButton>
                <InsertLinkOutlinedIcon />
              </IconButton>
              <IconButton>
                <TagFacesOutlinedIcon />
              </IconButton>
              <IconButton>
                <AddToDriveOutlinedIcon />
              </IconButton>
              <IconButton>
                <ImageOutlinedIcon />
              </IconButton>
              <IconButton>
                <LockClockOutlinedIcon />
              </IconButton>
              <IconButton>
                <CreateOutlinedIcon />
              </IconButton>
              <IconButton>
                <MoreVertOutlinedIcon />
              </IconButton>
            </div>
            <IconButton>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default SendModal
