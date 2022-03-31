import { ErrorMessage, Form, Field, Formik } from "formik";
import React from "react";

const Step1 = ({ data, setDataToForm, myNext, myPrev }) => {
	return (
		<>
			<Formik
				initialValues={{
					firstName: data?.firstName || "",
					secondName: data?.secondName || "",
					firstSurname: data?.firstSurname|| "",
					secondSurname: data?.secondSurname || "",
					documentType: data?.documentType || "",
					documentNumber: data?.documentNumber || "",
					documentPdf: data?.documentPdf || "",
					profilePic: data?.profilePic || "",
					dateOfBirth: data?.dateOfBirth || "",
					age: data?.age || "",
					sex: data?.sex || "",
					maritalStatus: data?.maritalStatus || "",
					email: data?.email || "",
					phone1: data?.phone1 || "",
					phone2: data?.phone2 || "",
				}}
				validate={(formValues) => {
					const error = {};
					if (!formValues.firstName) {
						error.firstName = "Por favor ingresa tu nombre";
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(formValues.firstName)) {
						error.firstName = "Por favor ingresa sólo letras";
					}

					if (!formValues.firstSurname) {
						error.firstSurname = "Por favor ingresa tu apellido";
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(formValues.firstSurname)) {
						error.firstSurname = "Por favor ingresa sólo letras";
					}

					if (!formValues.phone1) {
						error.phone1 = "Por favor ingresa tu número de contacto";
					}

					if (!formValues.documentNumber) {
						error.documentNumber = "Por favor ingresa tu número de documento";
					}

					if (!formValues.email) {
						error.email = "Por favor ingresa tu correo";
					} else if (
						!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
							formValues.email
						)
					) {
						error.email = "Por favor ingresa un correo válido";
					}

					return error;
				}}

        onSubmit={(allValues, { resetForm }) => {
					setDataToForm(allValues)
					// myNext()
        }}
			>
				{({ errors }) => (
					<Form className='step1'>
						<div className='row mt-4'>
							<div className='col-12 col-md-6'>
								<label htmlFor='firstName' className='form-label'>
									Primer Nombre
								</label>
								<Field
									type='text'
									id='firstName'
									name='firstName'
									placeholder=''
									className='form-control'
                  // // onChange={handeleChange}
                  // value={data.firstName}
								/>
								<ErrorMessage
									name='firstName'
									component={() => (
										<div className='error'> {errors.firstName} </div>
									)}
								/>
							</div>
							<div className='col-12 col-md-6'>
								<label htmlFor='secondName' className='form-label'>
									Segundo Nombre
								</label>
								<Field
									type='text'
									id='secondName'
									name='secondName'
									placeholder=''
									className='form-control'
                  // onChange={handeleChange}
                  // value={data.secondName}
								/>
							</div>
						</div>
						<div className='row mt-4'>
							<div className='col-12 col-md-6'>
								<label htmlFor='firstSurname' className='form-label'>
									Primer apellido
								</label>
								<Field
									type='text'
									id='firstSurname'
									name='firstSurname'
									placeholder=''
									className='form-control'
                  // onChange={handeleChange}
                  // value={data.firstSurname}
								/>
								<ErrorMessage
									name='firstSurname'
									component={() => (
										<div className='error'> {errors.firstSurname} </div>
									)}
								/>
							</div>
							<div className='col-12 col-md-6'>
								<label htmlFor='secondSurname' className='form-label'>
									Segundo apellido
								</label>
								<Field
									type='text'
									id='secondSurname'
									name='secondSurname'
									placeholder=''
									className='form-control'
                  // onChange={handeleChange}
                  // value={data.secondSurname}
								/>
							</div>
						</div>
						<div className='row mt-4'>
							<div className='col-12 col-md-6'>
								<label htmlFor='documentType' className='form-label'>
									Tipo de documento
								</label>
								<Field
									id='documentType'
									name='documentType'
									className='form-select'
									as='select'
                  // onChange={handeleChange}
                  // value={data.documentType}
								>
									<option value='cc'>Selecciona el tipo de documento</option>
									<option value='CC'>CC</option>
									<option value='TI'>TI</option>
									<option value='CC'>Cédula de extranjería</option>
									<option value='PEP'>
										Permiso Especial de Permanencia - PEP
									</option>
									<option value='PEP'>
										Permiso de proteccion temporal - PPT
									</option>
								</Field>
							</div>
							<div className='col-12 col-md-6'>
								<label htmlFor='documentNumber' className='form-label'>
									Número de documento
								</label>
								<Field
									type='number'
									id='documentNumber'
									name='documentNumber'
									placeholder=''
									className='form-control'
                  // onChange={handeleChange}
                  // value={data.documentNumber}
								/>
								<ErrorMessage
									name='documentNumber'
									component={() => (
										<div className='error'> {errors.documentNumber} </div>
									)}
								/>
							</div>
						</div>
						<div className='row mt-4'>
							<div className='col-12 col-md-6'>
								<label htmlFor='documentPdf' className='form-label'>
									Documento de identidad en PDF
								</label>
								<Field
									type='url'
									id='documentPdf'
									name='documentPdf'
									placeholder=''
									className='form-control'
                  // // onChange={handeleChange}
                  // // value={data.documentPdf}
								/>
							</div>
							<div className='col-12 col-md-6'>
								<label htmlFor='dateOfBirth' className='form-label'>
									Fecha de nacimiento
								</label>
								<Field
									type='date'
									id='dateOfBirth'
									name='dateOfBirth'
									placeholder=''
									className='form-control'
                  // onChange={handeleChange}
                  // value={data.dateOfBirth}
								/>
							</div>
							<div className='row mt-4'>
								<div className='col-12 col-md-6'>
									<label htmlFor='age' className='form-label'>
										Edad actual
									</label>
									<Field
										type='number'
										id='age'
										className='form-control'
										name='age'
                    // onChange={handeleChange}
                    // value={data.age}
									/>
								</div>
								<div htmlFor='sex' className='col-12 col-md-6'>
									<label className='form-label'>
										Sexo (Según documento de identidad)
									</label>
									<Field
										as='select'
										id='sex'
										className='form-select'
										name='sex'
                    // onChange={handeleChange}
                    // value={data.sex}
									>
										<option value='cc'>Selecciona tu Sexo</option>
										<option value='masculino'>Masculino</option>
										<option value='femenino'>Femenino</option>
									</Field>
								</div>
							</div>
						</div>
						<div className='row mt-4'>
							<div className='col-12 col-md-6'>
								<label htmlFor='maritalStatus' className='form-label'>
									Estado civil
								</label>
								<Field
									id='maritalStatus'
									name='maritalStatus'
									className='form-select'
									as='select'
                  // onChange={handeleChange}
                  // value={data.maritalStatus}
								>
									<option value='cc'>Selecciona tu Estado Civil</option>
									<option value='Soltero'>Soltero</option>
									<option value='Casado'>Casado</option>
									<option value='Divorciado'>Divorciado</option>
									<option value='Separación en proceso judicial'>
										Separación en proceso judicial
									</option>
									<option value='Union libre'>Union libre</option>
									<option value='Viudo'>Viudo</option>
								</Field>
							</div>
							<div className='col-12 col-md-6'>
								<label htmlFor='profilePic' className='form-label'>
									Foto de perfil
								</label>
								<Field
									type='url'
									id='profilePic'
									name='profilePic'
									placeholder=''
									className='form-control'
								/>
							</div>
						</div>
						<div className='row mt-4'>
							<div className='col-12 col-md-6'>
								<label htmlFor='email' className='form-label'>
									Correo electrónico
								</label>
								<Field
									type='text'
									id='email'
									name='email'
									placeholder=''
									className='form-control'
                  // onChange={handeleChange}
                  // value={data.email}                  
								/>
								<ErrorMessage
									name='email'
									component={() => (
										<div className='error'> {errors.email} </div>
									)}
								/>
							</div>
							<div className='col-12 col-md-6'>
								<label htmlFor='phone1' className='form-label'>
									Teléfono principal de contacto
								</label>
								<Field
									type='number'
									id='phone1'
									name='phone1'
									placeholder=''
									className='form-control'
                  // onChange={handeleChange}
                  // value={data.phone1}
								/>
								<ErrorMessage
									name='phone1'
									component={() => (
										<div className='error'> {errors.phone1} </div>
									)}
								/>
							</div>
						</div>
						<div className='row mt-4'>
							<div className='col-12 col-md-6'>
								<label htmlFor='phone2' className='form-label'>
									Telefono alterno de contacto
								</label>
								<Field
									type='number'
									id='phone2'
									name='phone2'
									placeholder=''
									className='form-control'
                  // onChange={handeleChange}
                  // value={data.phone2}
								/>
							</div>
						</div>
						<Field type="submit" value="Validar"/>
						{/* <button onClick={handleNext}>
								Next
						</button> */}
					</Form>
				)}
			</Formik>
		</>
	);
};

export default Step1;
