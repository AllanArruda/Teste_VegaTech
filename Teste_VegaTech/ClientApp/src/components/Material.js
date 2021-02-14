import React, { Component } from 'react';
import { Grid, TextField, Button } from "@material-ui/core";

export class Material extends Component {
  static displayName = Material.name;

    // The app should be able to automatically get the informations of "CreatedAt, CreatedBy, UpdatedAt and UpdatedBy" to insert on the database. This is not implemented here, however.
  render() {
    return (
        <form noValidate autoComplete="off">
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        id="standard-basic"
                        label="Supplier's ID"
                        name="IDSupplier"
                    />
                    <TextField
                        label="Code"
                        name="Code"
                    />
                    <TextField
                        label="Name"
                        name="Name"
                    />
                    <TextField
                        label="Description"
                        name="Description"
                    />
                    <TextField
                        label="Fiscal Code"
                        name="FiscalCode"
                    />
                    <TextField
                        label="Specie"
                        name="Specie"
                    />
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            name="AddMaterial"
                        >
                            Add new Material
                      </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    );
  }

}
