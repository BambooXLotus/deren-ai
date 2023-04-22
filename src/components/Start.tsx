import { AlertTriangle, CloudLightning, Sun } from "lucide-react";

type StartProps = {
  id?: string;
};

const Start: React.FC<StartProps> = () => {
  return (
    <div className="flex-1 bg-gray-800">
      <div className="flex h-screen flex-col items-center justify-center px-2 text-white">
        <h1 className="mb-20 text-5xl font-bold">Deren ChatGPT</h1>
        <div className="flex space-x-2 text-center">
          <div>
            <div className="mb-5 flex flex-col items-center justify-center">
              <Sun className="h-8 w-8" />
              <h2>Examples</h2>
            </div>
            <div className="space-y-2">
              <p className="max-w-xs rounded-lg bg-gray-700/50 p-4">
                {'"Explain Something to me"'}
              </p>
              <p className="max-w-xs rounded-lg bg-gray-700/50 p-4">
                {'"What is the difference between a dog and a cat?"'}
              </p>
              <p className="max-w-xs rounded-lg bg-gray-700/50 p-4">
                {'"What is the color of the sun?"'}
              </p>
            </div>
          </div>
          <div>
            <div className="mb-5 flex flex-col items-center justify-center">
              <CloudLightning className="h-8 w-8" />
              <h2>Capabilities</h2>
            </div>
            <div className="space-y-2">
              <p className="max-w-xs rounded-lg bg-gray-700/50 p-4">
                Change the ChatGPT Model to use
              </p>
              <p className="max-w-xs rounded-lg bg-gray-700/50 p-4">
                Messages are stored in Supabase
              </p>
              <p className="max-w-xs rounded-lg bg-gray-700/50 p-4">
                Hot Toast notifications when ChatGPT is thinking!
              </p>
            </div>
          </div>

          <div>
            <div className="mb-5 flex flex-col items-center justify-center">
              <AlertTriangle className="h-8 w-8" />
              <h2>Limitations</h2>
            </div>
            <div className="space-y-2">
              <p className="max-w-xs rounded-lg bg-gray-700/50 p-4">
                May occasionally generate incorrect information
              </p>
              <p className="max-w-xs rounded-lg bg-gray-700/50 p-4">
                My occasionally produce harmful instructions or biased content
              </p>
              <p className="max-w-xs rounded-lg bg-gray-700/50 p-4">
                Limited knowledge of world and events after 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
