import { skeleton } from '../../utils';

interface ReadmeCardProps {
  username: string;
  loading: boolean;
}

/**
 * Renders a ReadmeCard component that displays only the specific GIF.
 * @param username - GitHub username (not used, but kept for consistency)
 * @param loading - Loading state
 * @returns JSX element representing the ReadmeCard with only the GIF.
 */
const ReadmeCard: React.FC<ReadmeCardProps> = ({
  loading,
}): React.JSX.Element => {

  if (loading) {
    return (
      <div className="card shadow-lg compact bg-base-100">
        <div className="card-body">
          <div className="mx-3">
            <div className="mt-3">
              {skeleton({ widthCls: 'w-full', heightCls: 'h-64' })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <div className="mt-4">
            <img 
              src="https://i.pinimg.com/originals/a5/d1/f6/a5d1f61e89bdce061817723044f8a757.gif" 
              alt="Cyberpunk Animation"
              className="w-full h-auto rounded-lg"
              style={{
                display: 'block'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadmeCard;