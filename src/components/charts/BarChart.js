//import { render } from 'react-dom';
import React, {Component} from 'react';
import { ResponsiveBar } from '@nivo/bar';

// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.

export default class BarChart extends Component {

    render (){
    return (
    <ResponsiveBar
        data={[
            {
              "country": "AD",
              "hot dog": 58,
              "hot dogColor": "hsl(155, 70%, 50%)",
              "burger": 183,
              "burgerColor": "hsl(135, 70%, 50%)",
              "sandwich": 73,
              "sandwichColor": "hsl(281, 70%, 50%)",
              "kebab": 199,
              "kebabColor": "hsl(208, 70%, 50%)",
              "fries": 89,
              "friesColor": "hsl(109, 70%, 50%)",
              "donut": 173,
              "donutColor": "hsl(330, 70%, 50%)"
            },
            {
              "country": "AE",
              "hot dog": 174,
              "hot dogColor": "hsl(135, 70%, 50%)",
              "burger": 72,
              "burgerColor": "hsl(210, 70%, 50%)",
              "sandwich": 63,
              "sandwichColor": "hsl(158, 70%, 50%)",
              "kebab": 30,
              "kebabColor": "hsl(142, 70%, 50%)",
              "fries": 115,
              "friesColor": "hsl(257, 70%, 50%)",
              "donut": 33,
              "donutColor": "hsl(36, 70%, 50%)"
            },
            {
              "country": "AF",
              "hot dog": 35,
              "hot dogColor": "hsl(304, 70%, 50%)",
              "burger": 157,
              "burgerColor": "hsl(175, 70%, 50%)",
              "sandwich": 33,
              "sandwichColor": "hsl(18, 70%, 50%)",
              "kebab": 154,
              "kebabColor": "hsl(113, 70%, 50%)",
              "fries": 2,
              "friesColor": "hsl(146, 70%, 50%)",
              "donut": 99,
              "donutColor": "hsl(84, 70%, 50%)"
            },
            {
              "country": "AG",
              "hot dog": 179,
              "hot dogColor": "hsl(196, 70%, 50%)",
              "burger": 105,
              "burgerColor": "hsl(42, 70%, 50%)",
              "sandwich": 114,
              "sandwichColor": "hsl(279, 70%, 50%)",
              "kebab": 81,
              "kebabColor": "hsl(277, 70%, 50%)",
              "fries": 42,
              "friesColor": "hsl(21, 70%, 50%)",
              "donut": 100,
              "donutColor": "hsl(78, 70%, 50%)"
            },
            {
              "country": "AI",
              "hot dog": 168,
              "hot dogColor": "hsl(290, 70%, 50%)",
              "burger": 71,
              "burgerColor": "hsl(49, 70%, 50%)",
              "sandwich": 105,
              "sandwichColor": "hsl(155, 70%, 50%)",
              "kebab": 61,
              "kebabColor": "hsl(49, 70%, 50%)",
              "fries": 128,
              "friesColor": "hsl(307, 70%, 50%)",
              "donut": 169,
              "donutColor": "hsl(200, 70%, 50%)"
            },
            {
              "country": "AL",
              "hot dog": 143,
              "hot dogColor": "hsl(261, 70%, 50%)",
              "burger": 36,
              "burgerColor": "hsl(35, 70%, 50%)",
              "sandwich": 98,
              "sandwichColor": "hsl(165, 70%, 50%)",
              "kebab": 70,
              "kebabColor": "hsl(282, 70%, 50%)",
              "fries": 131,
              "friesColor": "hsl(171, 70%, 50%)",
              "donut": 9,
              "donutColor": "hsl(260, 70%, 50%)"
            },
            {
              "country": "AM",
              "hot dog": 160,
              "hot dogColor": "hsl(26, 70%, 50%)",
              "burger": 70,
              "burgerColor": "hsl(142, 70%, 50%)",
              "sandwich": 106,
              "sandwichColor": "hsl(53, 70%, 50%)",
              "kebab": 57,
              "kebabColor": "hsl(330, 70%, 50%)",
              "fries": 69,
              "friesColor": "hsl(218, 70%, 50%)",
              "donut": 125,
              "donutColor": "hsl(11, 70%, 50%)"
            }
          ]}
        keys={[
            "hot dog",
            "burger",
            "sandwich",
            "kebab",
            "fries",
            "donut"
        ]}
        indexBy="country"
        margin={{
            "top": 50,
            "right": 130,
            "bottom": 50,
            "left": 60
        }}
        colors="nivo"
        colorBy="id"
        borderColor="inherit:darker(1.6)"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "country",
            "legendPosition": "middle",
            "legendOffset": 32
        }}
        axisLeft={{
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "food",
            "legendPosition": "middle",
            "legendOffset": -40
        }}
        labelSkipWidth={1}
        labelSkipHeight={12}
        labelTextColor="inherit:darker(1.6)"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        padding={0.2}
        legends={[
            {
                "dataFrom": "keys",
                "direction": "row",
                "anchor": 'bottom',
                "justify": false,
                "translateX": 20,
                "translateY": 25,
                "itemWidth": 20,
                "itemHeight": 10,
                "itemDirection": "left-to-right",
                "itemOpacity": 0.85,
                "symbolSize": 20,
                "effects": [
                    {
                        "on": "hover",
                        "style": {
                            "itemOpacity": 1
                        }
                    }
                ]
            }
        ]}
    />
    )}
}