import childProcess from "child_process"

export class Git {

  public static getCurrentCommitNumber = (defaultValue: string): string => {
    try {
      const commitNumber = childProcess
        .execSync('git rev-parse HEAD')
        .toString().trim()

      return commitNumber
    } catch (error) {
      console.error("Could't get commit number. " + error);
      return defaultValue
    }
  }
}
