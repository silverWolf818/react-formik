import {useField, Form, Formik} from 'formik'

const MyTextField = ({label, ...props}) => {
    const [field, meta, helpers] = useField(props)
    return (
        <>
            <label>
                {label}
                <input {...field} {...props} />
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}

const UseFieldExample = () => (
    <div>
        <h1>My Form</h1>
        <Formik
            initialValues={{
                email: '',
                firstName: 'red',
                lastName: '',
            }}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    actions.setSubmitting(false)
                }, 1000)
            }}
        >
            {() => (
                <Form>
                    <MyTextField name="firstName" type="text" label="First Name"/>
                    <MyTextField name="lastName" type="text" label="Last Name"/>
                    <MyTextField name="email" type="email" label="Email"/>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
)

export default UseFieldExample
