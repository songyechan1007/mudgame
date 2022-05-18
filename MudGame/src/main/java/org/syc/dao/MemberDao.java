package org.syc.dao;

import org.syc.dto.MemberDTO;

public interface MemberDao {
	public void memberJoin(MemberDTO mdto);
	public MemberDTO memberLogin(MemberDTO mdto);
	public MemberDTO idOverRapCheck(String id);
	public void removeMember(String id);
	public void updateHavePlayer(String id);

	
}
