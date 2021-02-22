<div style={{alignItems:'center', justifyContent:'center'}}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
            >
              Send us Feedback
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Feedback</DialogTitle>
              <Formik
                initialValues={{name:"", email: "", feedback: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      margin="dense"
                      label="Name"
                      id="name"
                      type="text"
                      name="name"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    {errors.name && touched.name && errors.name}
                    <TextField
                      margin="dense"
                      label="Email Address"
                      type="email"
                      id="email"
                      name="email"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <TextField
                      margin="dense"
                      type="textarea"
                      label="FeedBack"
                      id="feedback"
                      name="feedback"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.feedback}
                    />
                    {errors.feedback && touched.feedback && errors.feedback}
                    <Button
                      color="primary"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Submit
                    </Button>
                  </form>
                )}
              </Formik>
            </Dialog>
          </div>