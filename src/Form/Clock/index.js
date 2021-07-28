import { useCurrentDate } from '../../useCurrentDate';
import { StyledClock } from './styled';

const Clock = () => {
    const {
        formattedDate,
    } = useCurrentDate();

    return (
        <StyledClock>
            Dzisiaj jest {formattedDate}
        </StyledClock>
    );
};

export default Clock;
