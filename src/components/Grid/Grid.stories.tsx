import { Story, Meta } from "@storybook/react/types-6-0";

import Grid from "./Grid";
import Box from "../Box/Box";

type ArgsParams = {
  container?: boolean
  item?: boolean
  spacing?: string
  justifyContent?: string
  alignItems?: string
  xs?: number
  sm?: number
  md?: number
  lg?: number
  text?: string
  color?: string
  bgColor?: string
};

const args:ArgsParams = {
  container: true,
  item: true,
  spacing: 'sm',
  justifyContent: '',
  alignItems: '',
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
  text: 'Box',
  color: '#333',
  bgColor: '#ddd'
}

export default {
  title: "Grid",
  component: Grid,
  args,
} as Meta;

export const Basic: Story = ({container, item, spacing, justifyContent, alignItems, xs, sm, md, lg, text, color, bgColor}) => (
  <div style={{margin: '16px', height: '100vh'}}>    
    <Grid container={container} spacing={spacing} justifyContent={justifyContent} alignItems={alignItems}>
        <Grid item={item} xs={xs} sm={sm} md={md} lg={lg}>
          <Box 
            text={text}
            color={color}
            bgColor={bgColor}
          />
        </Grid>
        <Grid  item={item} xs={xs} sm={sm} md={md} lg={lg}>
          <Box 
            text={text}
            color={color}
            bgColor={bgColor}
          />
        </Grid>
        <Grid  item={item} xs={xs} sm={sm} md={md} lg={lg}>
          <Box 
            text={text}
            color={color}
            bgColor={bgColor}
          />
        </Grid>
        <Grid  item={item} xs={xs} sm={sm} md={md} lg={lg}>
          <Box 
            text={text}
            color={color}
            bgColor={bgColor}
          />
        </Grid>
      </Grid>
  </div>
);