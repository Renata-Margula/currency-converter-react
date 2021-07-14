import { useCurrentDate } from '../../useCurrentDate';
import { StyledClock } from './styled';

const Clock = () => {
    const {
        dateFormat,
    } = useCurrentDate();

    return (
        <StyledClock>
            Dzisiaj jest {dateFormat}
        </StyledClock>
    );
};

export default Clock;
