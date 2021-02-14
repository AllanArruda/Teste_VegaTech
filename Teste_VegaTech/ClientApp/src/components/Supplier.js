import React, { Component } from 'react';
import { Grid, TextField, Button } from "@material-ui/core";

export class Supplier extends Component {
  static displayName = Supplier.name;

  render() {
      return (
          <form>
              <Grid container>
                  <Grid item xs={6}>
                      <TextField
                          label="CNPJ"
                          name="CNPJ"
                      />
                      <TextField
                          label="CEP"
                          name="CEP"
                      />
                      <TextField
                          label="Register Date"
                          name="RegisterDate"
                      />
                  <div>
                      <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          name="AddSupplier"
                      >
                              Add new Supplier
                      </Button>
                  </div>
                  </Grid>
              </Grid>
          </form>
    );

  }
}
