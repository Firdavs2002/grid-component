import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Grid from "./Grid";
import Box from "../Box/Box";

export default {
  title: "Grid",
  component: Grid,
} as Meta;

export const Basic: Story = (args) => (
  <div style={{ position: "relative" }}>
    <Grid container spacing='sm' justifyContent='flex-end' alignItems='center' {...args}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>
            Box 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>
            Box 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>
            Box 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>
            Box 4
          </Box>
        </Grid>
      </Grid>
  </div>
);

export const Interactive: Story = (args) => (
  <div className="App" style={{margin: '16px', height: '100vh'}}>
      <Grid container justifyContent='flex-end' alignItems='center' spacing='sm' {...args}>
        <Grid item xs={1}>
          <Box>
            Box 1
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box>
            Box 2
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box>
            Box 3
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box>
            Box 4
          </Box>
        </Grid>
      </Grid>
    </div>
);