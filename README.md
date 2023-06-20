# tods-score-grid

React draw display for TODS tournament draw structures / brackets

```js
yarn install
yarn storybook
```

## Online Documentation

Interactive [Storybook](https://courthive.github.io/tods-score-grid) documentation/demos.

## Example

![alt text](https://github.com/CourtHive/tods-score-grid/blob/main/assets/tods-score-grid.png?raw=true)

## Use

**ScoreGrid** requires `eventData` which is produced by [Competition Factory](https://courthive.github.io/tods-competition-factory/). Examples of **ScoreGrid** can be see in the Factory documentation.

```js
import { ScoreGrid } from 'tods-score-grid';

const Draw = () => {
  const { eventData } =
    tournamentEngine.getEventData({
      participantsProfile: { withIOC: true, withISO2: true },
      eventId
    }) || {};

  const compositionName = utilities.randomMember(['Australian', 'Wimbledon', 'National', 'US Open', 'French', 'ITF']);

  return (
    <div style={{ zoom: 0.9 }}>
      <ScoreGrid compositionName={compositionName} eventData={eventData} events={{}} />
    </div>
  );
};
```
