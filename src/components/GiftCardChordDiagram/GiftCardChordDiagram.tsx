import React from 'react';
import './GiftCardChordDiagram.css';
import { ResponsiveChord, RibbonTooltipComponentProps } from '@nivo/chord'
import { TableTooltip, Chip } from '@nivo/tooltip'
import { CUSTOMERS } from '../../models/DataGenerator';
import { formatBalance } from '../../utils/Formatters';
import { BaseChartProps } from '../../models/CommonChartModels';

interface GiftCardChordDiagramState {
  data: number[][]
}

export default class GiftCardChordDiagram extends React.Component<BaseChartProps, GiftCardChordDiagramState> {
  constructor(props: BaseChartProps) {
    super(props);

    this.state = {
      data: [
        [
          650,
          285,
          465,
          470,
          1030
        ],
        [
          400,
          410,
          65,
          220,
          170
        ],
        [
          85,
          1975,
          10,
          45,
          340
        ],
        [
          560,
          980,
          355,
          1820,
          1980
        ],
        [
          190,
          90,
          115,
          380,
          840
        ]
      ]
    }
  }
    
    private ribbonTooltip = ({ ribbon }: RibbonTooltipComponentProps) => (
        <TableTooltip 
            rows={[
                [
                  <Chip key="chip" color={ribbon.source.color} />,
                  <span key="id">{ribbon.source.id}</span>, 
                  '->',
                  <span key="id">{ribbon.target.id}</span>,
                  <strong key="id">{formatBalance(ribbon.source.value)}</strong>,
                ],
                [
                  <Chip key="chip" color={ribbon.target.color} />,
                  <span key="id">{ribbon.target.id}</span>, 
                  '->',
                  <span key="id">{ribbon.source.id}</span>,
                  <strong key="id">{formatBalance(ribbon.target.value)}</strong>,
                ],
            ]}
        />
    )

  render() {

    return (
     <div data-testid='GiftCardChordDiagram' className={this.props.isDashboardChild ? "small-diagram-container" : "full-page-diagram-container"}>

       <ResponsiveChord
        data={this.state.data}
        ribbonTooltip={this.ribbonTooltip}
        keys={CUSTOMERS}
        margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
        valueFormat={formatBalance}
        padAngle={0.02}
        innerRadiusRatio={0.96}
        innerRadiusOffset={0.02}
        inactiveArcOpacity={0.25}
        arcBorderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.6
                ]
            ]
        }}
        onArcClick={this.props.handleDataPointClick}
        onRibbonClick={this.props.handleDataPointClick}
        activeRibbonOpacity={0.75}
        inactiveRibbonOpacity={0.25}
        ribbonBorderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.6
                ]
            ]
        }}
        labelRotation={-90}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1
                ]
            ]
        }}
        colors={{ scheme: 'set2' }}
        motionConfig="stiff"
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 70,
                itemWidth: 80,
                itemHeight: 14,
                itemsSpacing: 15,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
        theme= {{
          tooltip: {
            container: {
              background: "#32393c",
              color: "#e5e5e5",
              fontSize: 12
            }
          }
        }}
    />
     </div>
    );
  }
}
